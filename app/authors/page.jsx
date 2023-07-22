"use client";
import React from 'react'
import { DaktiloProfileCard } from '@components/DaktiloProfileCard';
import DaktiloList from '@components/DaktiloList';
import { authorsData } from '@utils/mock';
import DaktiloSearch from '@components/DaktiloSearch';



function Authors() {
    return (
        <>
     <DaktiloList Component={DaktiloProfileCard} data={authorsData} />
     </>
    )
}

export default Authors;