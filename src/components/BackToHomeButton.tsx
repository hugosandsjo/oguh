// 'use client'

// import Link from 'next/link'
// import { ArrowLeft } from 'lucide-react'

// export default function BackToHomeButton() {
//   return (
//     <Link
//       href="/"
//       className="fixed bottom-10 sm:top-8 left-12 z-50 flex items-center gap-2 px-2 py-2 text-sm font-bold text-gray-700 bg-white rounded-sm sm:shadow-md hover:bg-gray-50 transition-colors"
//     >
//       <ArrowLeft className="w-7 h-7" />
  
//     </Link>
//   )
// }

'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 sm:bottom-auto sm:top-8 left-12 z-50 flex items-center gap-2 px-1 py-1 text-sm font-medium text-gray-700 bg-white rounded-sm hover:bg-gray-50 transition-colors"
    >
      <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      {/* <span className="sm:inline">Back</span> */}
    </Link>
  )
}