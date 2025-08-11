import React from 'react'
import clsx from 'clsx'
import { FiPlay } from 'react-icons/fi'

import { ctaDetails } from '@/data/cta'

const DemoButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.appStoreUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <FiPlay size={24} />
                </div>
                <div>
                    <div className="text-xs">
                        VOIR LA
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Démo
                    </div>
                </div>
            </button>
        </a>
    )
}

export default DemoButton