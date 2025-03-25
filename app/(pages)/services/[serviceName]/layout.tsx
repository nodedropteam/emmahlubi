import React from 'react'
import { services } from '@/templates';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export async function generateMetadata({ params }: { params: Promise<{ serviceName: string }> }): Promise<Metadata> {
    const { serviceName } = await params;
    const service = services.find(service => service.name === serviceName);

    return {
        title: service ? `${service.pageTitle} | ${siteConfig.name}` : siteConfig.title,
        description: service ? service.description : siteConfig.description,
    };
}

export default async function ServiceDetailsLayout({ children }:
    { children: React.ReactNode }) {

    return (
        <div className="page-wrapper full content-grid pt-[120px] 2xl:pt-[200px]">
            {children}
        </div>
    );
}
