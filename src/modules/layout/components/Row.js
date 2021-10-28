import { React } from '../dependencies'
import InsertHTML from '../../../tools/InsertHTML'

const Row = ({ children, params, opt, bgOpt, bgImg }) => (
	<>
		<InsertHTML
			type="row"
			params={params}
			opt={opt}
			children={children}
			bgOpt={bgOpt}
			bgImg={bgImg}
		/>
	</>
)

export default Row
