
const FooterM = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4">
       <div>
            <h1 className="mb-1 font-semibold text-2xl">About</h1>
            <ul>
                <li><a href="#">Board of Governors</a></li>
                <li><a href="#">Director</a></li>
                <li><a href="#">Research Council</a></li>
                <li><a href="#">Alumni</a></li>
                <li><a href="#">Join</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Research</h1>
            <ul>
                <li><a href="#">Research Divisions</a></li>
                <li><a href="#">Research Collaboration</a></li>
                <li><a href="#">Research Funding</a></li>
                <li><a href="#">Young Scientist Association (YSA)</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Dissemination</h1>
            <ul>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Research Publication</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
       </div>
       <div>
            <h1 className="mb-1 font-semibold text-2xl">Contact</h1>
            <ul>
                <li><a href="#">Directory</a></li>
                <li><a href="#">Right to Information</a></li>
                <li><a href="#">Research Council</a></li>
                <li><a href="#">Scientists</a></li>
                <li><a href="#">Staff Profile</a></li>
            </ul>
       </div>
    </div>
  )
}

export default FooterM