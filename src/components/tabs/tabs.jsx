
import { useState } from 'react';
import './tabs.css';

export default function Tabs({tabs}) {

	const [tabsContent, setTabsContent] = useState(tabs);

	function handleRadioChange(e) {
		const items = [...tabsContent];
		const prevTab = items.find(i => i.checked);
		prevTab.checked = false;

		const id = e.target.getAttribute("data-id");
		const currentTab = items.find(i => i.id === id);
		currentTab.checked = true;

		setTabsContent(items);
	}

	return (
		<div className="comp-cont tab-wrap">

			{tabsContent.map((tabItem) => (
				<div className="tab-input" key={tabItem.id}>
					<input type="radio" id={`tab${tabItem.id}`} name="tabGroup1" className="tab-rad" data-id={tabItem.id} checked={tabItem.checked} onChange={handleRadioChange} />
					<label htmlFor={`tab${tabItem.id}`}>{ tabItem.label }</label>
				</div>
			))}

			{tabsContent.map((tabItem) => (
				<div className={`tab-content ${tabItem.checked ? 'selected' : ''}`} key={tabItem.id}>
					<h3>{ tabItem.title }</h3>
					<div className="tab-body" dangerouslySetInnerHTML={{ __html: tabItem.content}} />
				</div>
			))}

		</div>
	)
}