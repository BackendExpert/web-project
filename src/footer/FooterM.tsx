
const FooterM = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-2">
       <div>
            <h1 className="mb-1 font-semibold text-2xl">About</h1>
            <ul className="mt-4">
                <li className="h-10 text-gray-200"><a href="#">Board of Governors</a></li>
                <li className="h-10 text-gray-200"><a href="#">Director</a></li>
                <li className="h-10 text-gray-200"><a href="#">Research Council</a></li>
                <li className="h-10 text-gray-200"><a href="#">Alumni</a></li>
                <li className="h-10 text-gray-200"><a href="#">Join</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Research</h1>
            <ul className="mt-4">
                <li className="h-10 text-gray-200"><a href="#">Research Divisions</a></li>
                <li className="h-10 text-gray-200"><a href="#">Research Collaboration</a></li>
                <li className="h-10 text-gray-200"><a href="#">Research Funding</a></li>
                <li className="h-10 text-gray-200"><a href="#">Young Scientist Association (YSA)</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Dissemination</h1>
            <ul className="mt-4">
                <li className="h-10 text-gray-200"><a href="#">Reports</a></li>
                <li className="h-10 text-gray-200"><a href="#">Research Publication</a></li>
                <li className="h-10 text-gray-200"><a href="#">Blog</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Contact</h1>
            <ul className="mt-4">
                <li className="h-10 text-gray-200"><a href="#">Directory</a></li>
                <li className="h-10 text-gray-200"><a href="#">Right to Information</a></li>
                <li className="h-10 text-gray-200"><a href="#">Research Council</a></li>
                <li className="h-10 text-gray-200"><a href="#">Scientists</a></li>
                <li className="h-10 text-gray-200"><a href="#">Staff Profile</a></li>
            </ul>
       </div>
    </div>
  )
}

export default FooterM