const Footer = () => {
  return (
    <footer className="border-t-2 border-black px-8 py-6 flex items-center justify-between bg-[#f5f5f5]">
      <p className="font-grotesk text-sm text-black">
        Built by <span className="font-extrabold">Arnav</span> · Not affiliated with GitHub
      </p>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/Arnuuucpp/gitfolio" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-xl text-black"></i>
        </a>
        <a href="https://www.linkedin.com/in/arnav-shrivastava-58a601232/" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill text-xl text-black"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer