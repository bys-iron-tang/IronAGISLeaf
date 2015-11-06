CREATE TABLE [dbo].[User2Asset]
(
	[UserId] uniqueIdentifier not null,
	[AssetId] uniqueIdentifier not null,
	[ModifiedDate] datetime null,
	Primary Key([UserId],[AssetId])

)
