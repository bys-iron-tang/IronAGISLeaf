//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Iron.GPS.Repositories.Provider
{
    using System;
    using System.Collections.Generic;
    
    public partial class Asset
    {
        public System.Guid AssetId { get; set; }
        public Nullable<System.Guid> UserId { get; set; }
        public Nullable<System.Guid> AssetGroupId { get; set; }
        public string AssetName { get; set; }
        public Nullable<long> ClientId { get; set; }
        public string IMEIPwd { get; set; }
        public string EnterpriseNumber { get; set; }
        public string SimCardNo { get; set; }
        public Nullable<int> DeviceType { get; set; }
        public Nullable<System.DateTime> InstanllDate { get; set; }
        public Nullable<System.DateTime> ExpiredDate { get; set; }
        public string CarColor { get; set; }
        public Nullable<int> CarType { get; set; }
        public string OwnerName { get; set; }
        public string OwnerTel { get; set; }
        public string OwnerTel1 { get; set; }
        public string OwnerTel2 { get; set; }
        public string OwnerAddress { get; set; }
        public string Description { get; set; }
        public string ForwardingType { get; set; }
        public Nullable<System.Guid> CompanyId { get; set; }
        public Nullable<double> OilCapacity { get; set; }
    
        public virtual AssetGroup AssetGroup { get; set; }
    }
}