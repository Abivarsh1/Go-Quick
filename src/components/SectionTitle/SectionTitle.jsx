

const SectionTitle=({title, textAlign})=> {


  return (


    <div className={`mb-10 flex items-center w-full ${textAlign ? textAlign: 'justify-center'}`}>


        <h1 className="text-4xl font-semibold capitalize text-[#0f2137]">
            {title}
        </h1>


    </div>
  )
}

export default SectionTitle