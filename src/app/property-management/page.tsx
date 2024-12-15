import Banner from '@/components/property-management/Banner'
import PropertyManagementContact from '@/components/property-management/ContactPropertyManagement'
import PropertyContent from '@/components/property-management/PropertyContent'
import PropertyTerms from '@/components/property-management/RulesRegulation'
import React from 'react'

const ProjectManagement = () => {
    return (
        <>
            <Banner />
            <PropertyContent />
            <PropertyTerms />
            <PropertyManagementContact />

        </>
    )
}

export default ProjectManagement