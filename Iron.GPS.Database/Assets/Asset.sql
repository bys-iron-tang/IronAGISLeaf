CREATE TABLE [dbo].[Asset](
	[AssetId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NULL,
	[AssetGroupId] [uniqueidentifier] NULL,
	[AssetName] [nvarchar](50) NULL,
	[ClientId] BIGINT NULL,
	[IMEIPwd] [nvarchar](50) NULL,
	[EnterpriseNumber] [nvarchar](50) NULL,
	[SimCardNo] [nvarchar](50) NULL,
	[DeviceType] [int] NULL,
	[InstanllDate] [datetime] NULL,
	[ExpiredDate] [datetime] NULL,
	[CarColor] NVARCHAR(50) NULL,
	[CarType] [int] NULL,
	[OwnerName] [nvarchar](50) NULL,
	[OwnerTel] [nvarchar](50) NULL,
	[OwnerTel1] [nvarchar](50) NULL,
	[OwnerTel2] [nvarchar](50) NULL,
	[OwnerAddress] [nvarchar](255) NULL,
	[Description] [ntext] NULL,
	[ForwardingType] [nvarchar](50) NULL,
 [CompanyId] UNIQUEIDENTIFIER NULL, 
    [OilCapacity] FLOAT NULL, 
    CONSTRAINT [PK_Asset] PRIMARY KEY CLUSTERED 
(
	[AssetId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[Asset]  WITH CHECK ADD  CONSTRAINT [FK_Asset_AssetGroup] FOREIGN KEY([AssetGroupId])
REFERENCES [dbo].[AssetGroup] ([AssetGroupId])
GO

ALTER TABLE [dbo].[Asset] CHECK CONSTRAINT [FK_Asset_AssetGroup]
GO
