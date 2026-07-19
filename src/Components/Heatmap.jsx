import { GitHubCalendar } from 'react-github-calendar'

const Heatmap = ({ username }) => {
  if (!username) return null

  return (
    <div>
      <h3 className="font-archivo text-2xl mb-2">CURRENTLY GRINDING HARD?</h3>
      <div className="font-grotesk border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,2)] px-4 py-3 bg-gray-500 text-white w-fit h-fit">
      <GitHubCalendar username={username} blockSize={9} blockMargin={2} fontSize={10}/>
      </div>
    </div>
  )
}

export default Heatmap