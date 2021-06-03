import HomeContainer from '@comp/container/home/HomeContainer'
import Meta from '@comp/common/Meta'

export default function Home() {
	return (
		<>
			{/* <Meta title="Home | Silk Road" desc="실크로드에 오신것을 환영합니다."></Meta> */}
			<Meta></Meta>
			<HomeContainer />
		</>
	)
}
