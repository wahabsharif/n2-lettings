import Banner from '@/components/home/Banner'
import TenantsFilters from '@/components/tenants/TenantsFilters'
import TenantsListing from '@/components/tenants/TenantsListing'
import React from 'react'

const TenantsPage = () => {
    return (
        <>
            {/* <Banner /> */}
            <TenantsFilters />
            <TenantsListing />
        </>
    )
}

export default TenantsPage