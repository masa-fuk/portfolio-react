import React from 'react';
import '../css/RightContent.css';

class Works extends React.Component {
	componentDidMount() {
		this.props.contentname('Works');
	}

	render() {
		return (
			<div className='RightContent'>
				<div className='Content'>
					<div>
						<h2>Life is Tech!</h2>
						<p>
							中高生向けにプログラミングキャンプやスクールを実施しているLife is Tech！でメンターをしている。<br/>
							Webデザインコースを担当しており，HTML/CSSを用いたWebページの作成を行っている。
						</p>
					</div>
					<div>
						<h2>Beartail</h2>
						<p>
							経費精算システム、「Dr.経費精算」を提供しているBeartailでアルバイトを行っている．
							主にWebフロント周りの実装を行っている。
						</p>
					</div>
				</div>
			</div>
		)
	};
}

export default Works;