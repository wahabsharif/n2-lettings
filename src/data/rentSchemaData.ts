// rentSchemaData.ts

// Define the interface for RentSchema data
type RentSchemaItem = {
    heading: string;
    description: string;
};

// Data for the RentSchema component
export const rentSchemaData: RentSchemaItem[] = [
    {
        heading: "No Commission",
        description: "Your letting agent can easily absorb the 10-15% commission & management fees payable to them. We pay you 100% of the market rent and won't charge you any fees."
    },
    {
        heading: "No tenants to deal with ",
        description: "We will manage your properties as if it were our own,during the contract period you will never need to speak to the tenants. Our experienced lettings team carry out all viewings, undertake tenant reference checks and execute the tenancy documentation.And we continue paying your rent during the lettings process"
    },
    {
        heading: "No Void Periods",
        description: "As a landlord you can expect to experience some void periods, meaning no rental payments. With our Guaranteed Rental scheme we pay you rent whether we have tenan'ts or not "
    },
    {
        heading: "Constant Updates from Us",
        description: "We deal with all routine maintenance issues throughout the contract, only contacting you when a repair is needed.Tenants contact us directly so no more receiving phone calls at all hours from your tenants when the heating stops working or there is leak."
            },
    {
        heading: "No Late Rent Payments or Court Action",
        description: "As one of our guaranteed rent landlords, we will pay your rent on the same day each month (even if the tenants don't),allowing you to meet your financial obligations"
    },
    {
        heading: "Regular inspections",
        description: "We carry out periodic inspections to check that the tenants are keeping your home in good condition. We guarantee 100% client satisfacton which is why we ensure that your property is returned to its original condition at the end of the agreement.If the property is damaged in some way we well ensure it is fixed at no cost to you."
    }
];
