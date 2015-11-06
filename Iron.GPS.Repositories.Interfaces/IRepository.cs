using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Iron.GPS.Repositories.Interfaces
{
    public interface IRepository<TEntity>: IDisposable where TEntity: class
    {
        IEnumerable<TEntity> Get();

        IEnumerable<TEntity> Get(Expression<Func<TEntity,bool>> filter);

        IEnumerable<TEntity> Get<TOrderKey>(Expression<Func<TEntity, bool>> filter, int pageIndex, int pageSize,
            Expression<Func<TEntity, TOrderKey>> sortExp, bool isAsc = true);

        int Count(Expression<Func<TEntity, bool>> filter);

        object Add(TEntity item);

        void Add(IList<TEntity> items);

        void Update<TEntity>(TEntity item);

        void Update(IList<TEntity> items);

        void Delete(TEntity item);

        void Delete(IList<TEntity> item);

        void Delete(Expression<Func<TEntity,bool>> whereClause);

    }
}
