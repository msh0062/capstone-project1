import { Members } from "./members";

export interface Groups {
    GroupId: string,
    GroupName: string,
    OrganizationName: string,
    SponsorName: string,
    SponsorPhone: string,
    SponsorEmail: string,
    MaxGroupSize: string,
    Members: Members[
    //     {
    //     MemberId: number,
    //     MemberEmail: string,
    //     MemberName: string,
    //     MemberPhone: number
    // }
    ]
}