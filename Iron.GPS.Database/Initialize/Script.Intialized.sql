/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--初始化User表
if not exists(Select * from [User])
begin
INSERT [dbo].[User] ([UserId], [ParentUserId], [LoginName], [UserName], [Password], [ExpiredDate], [Tel], [Company], [Address], [Email], [Description], [LimitedSubUserCount], [LimitedAssetCount], [IsAliasUser], [LoginTimes], [CompanyId]) VALUES (N'6e291107-b04a-42bd-97a1-55e5be4e6f0e', N'6e291107-b04a-42bd-97a1-55e5be4e6f0e', N'admin', N'系统测试账户', N'123456', CAST(0x0000A55D00000000 AS DateTime), N'15117890123', N'GPS开发部', N'x:120 y；120', N'globe@gps.com', N'测试数据', 0, 0, 1, 0, N'c7d693b5-f747-4810-bc56-1b70b485f6f5')
end

--初始化AssetGroup
if not exists(Select * from [AssetGroup])
begin
INSERT [dbo].[AssetGroup] ([AssetGroupId], [ParentAssetGroupId], [GroupName], [DisplayIndex], [UserId], [CompanyId]) VALUES (N'd7ea881c-6f93-4bad-bd97-043f23e43e25', N'78d6fded-b40a-4aaa-ad5c-7af6f0d578e1', N'子分组1', 0, NULL, N'c7d693b5-f747-4810-bc56-1b70b485f6f5')
INSERT [dbo].[AssetGroup] ([AssetGroupId], [ParentAssetGroupId], [GroupName], [DisplayIndex], [UserId], [CompanyId]) VALUES (N'e9726a01-c3cb-4a38-a1bf-1d7f8860a068', N'78d6fded-b40a-4aaa-ad5c-7af6f0d578e1', N'子分组2', 1, NULL, N'c7d693b5-f747-4810-bc56-1b70b485f6f5')
INSERT [dbo].[AssetGroup] ([AssetGroupId], [ParentAssetGroupId], [GroupName], [DisplayIndex], [UserId], [CompanyId]) VALUES (N'78d6fded-b40a-4aaa-ad5c-7af6f0d578e1', NULL, N'分组1', 0, NULL, N'c7d693b5-f747-4810-bc56-1b70b485f6f5')
end



--初始化Asset
if not exists(Select * from [Asset])
begin

INSERT [dbo].[Asset] ([AssetId], [UserId], [AssetGroupId], [AssetName], [ClientId], [IMEIPwd], [EnterpriseNumber], [SimCardNo], [DeviceType], [InstanllDate], [ExpiredDate], [CarColor], [CarType], [OwnerName], [OwnerTel], [OwnerTel1], [OwnerTel2], [OwnerAddress], [Description], [ForwardingType], [CompanyId]) VALUES (N'1d94d30e-e632-4c18-af25-411150c81e45', N'6e291107-b04a-42bd-97a1-55e5be4e6f0e', N'78d6fded-b40a-4aaa-ad5c-7af6f0d578e1', N'粤BM7770', 121345553, N'0', N'0000000', N'123456789', 0, CAST(0x0000A3F200000000 AS DateTime), CAST(0x0000A55F00000000 AS DateTime), N'红色', 0, N'ma', N'0571-85206958', N'', N'', N'汾西路马然街', N'', N'', N'c7d693b5-f747-4810-bc56-1b70b485f6f5')
INSERT [dbo].[Asset] ([AssetId], [UserId], [AssetGroupId], [AssetName], [ClientId], [IMEIPwd], [EnterpriseNumber], [SimCardNo], [DeviceType], [InstanllDate], [ExpiredDate], [CarColor], [CarType], [OwnerName], [OwnerTel], [OwnerTel1], [OwnerTel2], [OwnerAddress], [Description], [ForwardingType], [CompanyId]) VALUES (N'1d94d30e-e632-4c18-af25-411150c81e49', N'6e291107-b04a-42bd-97a1-55e5be4e6f0e', N'78d6fded-b40a-4aaa-ad5c-7af6f0d578e1', N'粤BM7771', 3426454744, N'0', N'0000000', N'123456789', 0, CAST(0x0000A3F200000000 AS DateTime), CAST(0x0000A55F00000000 AS DateTime), N'黄色', 0, N'ma', N'0571-85206958', N'', N'', N'汾西路马然街', N'', N'', N'c7d693b5-f747-4810-bc56-1b70b485f6f5')

end