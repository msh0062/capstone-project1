export interface Groups {
    GroupId: number,
    GroupName: string,
    OrganizationName: string,
    SponsorName: string,
    SponsorPhone: number,
    SponsorEmail: string,
    MaxGroupSize: number,
        Members: [
            {
                MemberId: number,
                MemberEmail: string,
                MemberName: string,
                MemberPhone: number
            },
        ]
}