import React from 'react'
import clsx from 'clsx'
import { FiArrowRight } from 'react-icons/fi'

import { ctaDetails } from '@/data/cta'

const SignupButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <FiArrowRight size={24} />
                </div>
                <div>
                    <div className="text-xs">
                        ESSAI
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Gratuit
                    </div>
                </div>
            </button>
        </a>
    )
}

export default SignupButton