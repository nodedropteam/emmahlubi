import React from 'react';
import Form from 'next/form';

export default function CtaForm({ children, action }: { children: React.ReactNode, action: string }) {
    return (
        <Form action={action}>
            {children}
        </Form>
    )
}
