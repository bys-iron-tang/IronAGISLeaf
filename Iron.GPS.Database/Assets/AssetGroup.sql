CREATE TABLE [dbo].[AssetGroup] (
    [AssetGroupId]       UNIQUEIDENTIFIER NOT NULL,
    [ParentAssetGroupId] UNIQUEIDENTIFIER NULL,
    [GroupName]          NVARCHAR (50)    NULL,
    [DisplayIndex]       INT              NULL,
    [UserId] UNIQUEIDENTIFIER NULL, 
    [CompanyId] UNIQUEIDENTIFIER NULL, 
    CONSTRAINT [PK_AssetGroup] PRIMARY KEY CLUSTERED ([AssetGroupId] ASC)
);

