import { ProgressBar } from "react-loader-spinner";
const loader = () => {
	return (
		<div>
			<ProgressBar
				visible={true}
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='progress-bar-loading'
				wrapperStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
				wrapperClass=''
			/>
		</div>
	);
};

export default loader;
