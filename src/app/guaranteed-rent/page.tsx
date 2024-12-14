import GuaranteedBanner from '@/components/guaranteed-rent/Banner'
import ComparisonTable from '@/components/guaranteed-rent/ComparisonTable'
import ContactLettings from '@/components/guaranteed-rent/ContactLettings'
import RentSchema from '@/components/guaranteed-rent/RentSchem'
import SiteBack from '@/components/guaranteed-rent/SiteBack'
import React from 'react'

const RentGuarante = () => {
    return (
        <>
            <GuaranteedBanner />
            <SiteBack/>
            <RentSchema/>
            <ComparisonTable/>
            <ContactLettings/>
        </>
    )
}

export default RentGuarante