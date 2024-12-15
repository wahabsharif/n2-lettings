interface ComparisonData {
    id: number;
    comparison: string;
    typicalHighStreetAgent: string;
    n2LettingsGuaranteedRent: string;
  }
  
  export const comparisonData: ComparisonData[] = [
    {
      id: 1,
      comparison: 'Agent Commission',
      typicalHighStreetAgent: '10-15%',
      n2LettingsGuaranteedRent: 'Commission',
    },
    {
      id: 2,
      comparison: 'VAT paid',
      typicalHighStreetAgent: '20%',
      n2LettingsGuaranteedRent: 'No VAT',
    },
    {
      id: 3,
      comparison: 'Void Period',
      typicalHighStreetAgent: 'On average 500 750 costs to the landlord annually',
      n2LettingsGuaranteedRent: 'No Void periods, occupied property or not',
    },
    {
      id: 4,
      comparison: 'Rent Arrears',
      typicalHighStreetAgent: 'Landlords risk',
      n2LettingsGuaranteedRent: 'No arrears, landlords are paid by N2 Lettings',
    },
    {
      id: 5,
      comparison: 'Court Costs',
      typicalHighStreetAgent: 'Landlords risk',
      n2LettingsGuaranteedRent: 'No court costs to Landlords',
    },
    {
      id: 6,
      comparison: 'Net Rent',
      typicalHighStreetAgent: 'Usually 80% of market price',
      n2LettingsGuaranteedRent: '95-100% of market rent received by landlords',
    },
  ];