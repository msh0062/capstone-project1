import { Members } from "./members";

export interface Groups {
    GroupId: string,
    GroupName: string,
    OrganizationName: string,
    SponsorName: string,
    SponsorPhone: number,
    SponsorEmail: string,
    MaxGroupSize: number,
    Members: Members[]
}