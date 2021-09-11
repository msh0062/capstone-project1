export interface Groups {
    groupId: number,
    groupName: string,
    organizationName: string,
    sponsorName: string,
    sponsorPhone: number,
    sponsorEmail: string,
    maxGroupSize: number,
        members: [
            {
                memberId: number,
                memberEmail: string,
                MemberName: string,
                MemberPhone: number
            },
        ]
}