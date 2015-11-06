CREATE TABLE [dbo].[User] (
    [UserId]              UNIQUEIDENTIFIER NOT NULL,
    [ParentUserId]        UNIQUEIDENTIFIER NULL,
    [LoginName]           NVARCHAR (50)    NULL,
    [UserName]            NVARCHAR (50)    NULL,
    [Password]            NVARCHAR (50)    NULL,
    [ExpiredDate]         DATETIME         NULL,
    [Tel]                 NVARCHAR (50)    NULL,
    [Company]             NVARCHAR (200)   NULL,
    [Address]             NVARCHAR (255)   NULL,
    [Email]               NVARCHAR (200)   NULL,
    [Description]         NTEXT            NULL,
    [LimitedSubUserCount] INT              NULL,
    [LimitedAssetCount]   INT              NULL,
    [IsAliasUser]         BIT              NULL,
    [LoginTimes]          INT              NULL,
    [CompanyId] UNIQUEIDENTIFIER NULL, 
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([UserId] ASC),
    CONSTRAINT [FK_User_User] FOREIGN KEY ([ParentUserId]) REFERENCES [dbo].[User] ([UserId]) NOT FOR REPLICATION
);


GO
ALTER TABLE [dbo].[User] NOCHECK CONSTRAINT [FK_User_User];

