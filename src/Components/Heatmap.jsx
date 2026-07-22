import { GitHubCalendar } from 'react-github-calendar'

const Heatmap = ({ username }) => {
  if (!username) return null

  return (
    <div>
      <h3 className="font-archivo text-2xl mb-2">Proof of Work</h3>
      <div className="font-grotesk border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,2)] px-4 py-3 bg-transparent text-black w-fit h-fit">
      <GitHubCalendar username={username} blockSize={9.5} blockMargin={2} fontSize={12}
      theme={{
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
      }}
      />
      </div>
    </div>
  )
}

export default Heatmap