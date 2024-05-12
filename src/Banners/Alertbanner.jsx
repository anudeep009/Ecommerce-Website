import React from 'react'
import { AlertTriangle, X } from 'lucide-react'


function Alertbanner() {
  return (
    <>
      <div className="rounded-md border-l-4 border-red-500 bg-red-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-red-600">
              This is some informational text that you can use to show some alert content
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-red-600" />
          </div>
        </div>
      </div>
    </>
  )
}


export default Alertbanner
