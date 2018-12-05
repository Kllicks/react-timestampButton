import React from 'react';

const List = props => {
    return (

		<ul>
			{props.items.map((item, index) => {
				return (
					<li
						key = {index}
						className="single-timestamp"
					>
						{item}
					</li>
				);
			})}
		</ul>

    );
};


// function List(props) {
// 	return (
// 		<div>
			
// 		</div>
// 	);
// }

export default List;