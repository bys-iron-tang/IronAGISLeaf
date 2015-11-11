using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Iron.GPS.Repositories.Provider;
using Iron.GPS.Repositories.Interfaces;
using System.Data.Entity;
using System.Linq.Expressions;

namespace Iron.GPS.Repositories
{
    public abstract class BaseRepository<TEntity>:IRepository<TEntity> where TEntity: class
    {
        public IronGPSEntities DBContextEnt
        {
            get;
            set;
        }

        public DbSet<TEntity> DbSet 
        {
            get;
            set; 
        }
        public BaseRepository(IronGPSEntities dbContext)
        {
            this.DBContextEnt = dbContext;
            this.DbSet = this.DBContextEnt.Set<TEntity>();
        }


        public IEnumerable<TEntity> Get()
        {
            return this.DbSet.AsQueryable();
        }

        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter)
        {
            return this.DbSet.Where(filter).AsQueryable();
        }

        public IEnumerable<TEntity> Get<TOrderKey>(Expression<Func<TEntity, bool>> filter, int pageIndex, int pageSize,
            Expression<Func<TEntity, TOrderKey>> sortExp, bool isAsc = true)
        { 
            if(isAsc)
            {
                return this.DbSet.Where(filter).OrderBy(sortExp).Skip(pageSize*(pageIndex-1)).Take(pageSize).AsQueryable();
                
            }else
            {
                return this.DbSet.Where(filter).OrderByDescending(sortExp).Skip(pageSize * (pageIndex - 1)).Take(pageSize).AsQueryable();
            }
        }

        public int Count(Expression<Func<TEntity, bool>> filter)
        {
            return this.DbSet.Count(filter);
        }

        public void Add(TEntity item)
        {
            //this.DbSet.Attach(item);
            this.DbSet.Add(item);
            this.DBContextEnt.Entry(item).State = EntityState.Added;
            this.DBContextEnt.SaveChanges();
        }

        public void Add(IList<TEntity> items)
        {

            foreach (var item in items)
            {
                this.DbSet.Add(item);
                this.DBContextEnt.Entry(item).State = EntityState.Added;
            }

            this.DBContextEnt.SaveChanges();
        }

        public void Update(TEntity item)
        {
            this.DbSet.Attach(item);
            this.DBContextEnt.Entry(item).State = EntityState.Modified;
            this.DBContextEnt.SaveChanges();
        }

        public void Update(IList<TEntity> items)
        {
            foreach (var item in items)
            {
                this.DbSet.Attach(item);
                this.DBContextEnt.Entry(item).State = EntityState.Modified;
            }

            this.DBContextEnt.SaveChanges();
            
        }

        public void Delete(TEntity item)
        {
            this.DbSet.Attach(item);
            this.DBContextEnt.Entry(item).State = EntityState.Deleted;
            this.DBContextEnt.SaveChanges();
        }

        public void Delete(IList<TEntity> items)
        {
            foreach (var item in items)
            {
                this.DbSet.Attach(item);
                this.DBContextEnt.Entry(item).State = EntityState.Deleted;
            }

            this.DBContextEnt.SaveChanges();
        }

        public void Delete(Expression<Func<TEntity, bool>> whereClause)
        {
            var items = this.DbSet.Where(whereClause).AsQueryable();
            if (items != null && items.Count() > 0)
            {
                foreach (var item in items)
                {
                    this.DbSet.Attach(item);
                    this.DBContextEnt.Entry(item).State = EntityState.Deleted;
                }

                this.DBContextEnt.SaveChanges();
            }
        }

        public virtual void Dispose()
        {
        }
    }
}
