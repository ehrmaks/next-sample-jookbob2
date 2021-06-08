import { Icon } from 'semantic-ui-react'

export default function Error() {
	return (
		<div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
			<Icon name="warning circle" color="orange"></Icon>
			오류가 발생 했습니다.
		</div>
	)
}
