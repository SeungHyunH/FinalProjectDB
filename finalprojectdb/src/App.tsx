import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  return (
    <div>
        <h1>
           텀 프로젝트 : Slay the Spire 사전(20161271 한승현)
        </h1>
		<h1 id ='hero'>
			영웅
		</h1>
		<Hero/>
		<br/><br/><br/>
		<h1 id ='startcard'>
			시작카드
		</h1>
		<Start_card/>
		<br/><br/><br/>
		<h1 id ='startitem'>
			시작아이템
		</h1>
		<Start_Item/>
		<br/><br/><br/>
		<h1 id ='card'>
			카드
		</h1>
        <Card/>
		<br/><br/><br/>
		<h1 id ='item'>
			아이템
		</h1>
		<Item/>
		<br/><br/><br/>
		<h1 id ='potion'>
			포션
		</h1>
		<Potion/>
    </div>
  )
}

const Hero = () => {
	const [heros, setHero] = useState<any[]>([])
	
	const fetchHero = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/hero')
	        console.log(res)
			setHero(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchHero()
	}, [])
	
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>id</th>
                    <th>이름</th>
					<th>체력</th>
					<th>플레이버텍스트</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {heros.map((hero, index) =>
                    <tr key={index}>
                        <td>{hero.id}</td>
                        <td>{hero.name}</td>
                        <td>{hero.hp}</td>
                        <td>{hero.flavor_text}</td>
						<td><img src = {`./image/${hero.image}`} alt='NULL'/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const Start_card = () => {
	const [startcards, setStartCard] = useState<any[]>([])
	
	const fetchStartCard = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/start_card')
	        console.log(res)
			setStartCard(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchStartCard()
	}, [])
	
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>영웅</th>
					<th>StartCard이름</th>
					<th>코스트</th>
					<th>강화</th>
					<th>등급</th>
					<th>타입</th>
					<th>효과</th>
					<th>comment</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {startcards.map((startcard, index) =>
                    <tr key={index}>
						<td>{startcard.heroname}</td>
                        <td>{startcard.cardname}</td>
                        <td>{startcard.cost}</td>
                        <td>{startcard.reinforcement}</td>
                        <td>{startcard.class}</td>
						<td>{startcard.type}</td>
						<td>{startcard.effect}</td>
						<td>{startcard.comments}</td>
						<td><img src = {`./image/${startcard.image}`} alt='NULL'/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const Start_Item = () => {
	const [startitems, setStartItem] = useState<any[]>([])
	
	const fetchStartItem = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/start_item')
	        console.log(res)
			setStartItem(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchStartItem()
	}, [])
	
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>영웅</th>
					<th>StartItem이름</th>
					<th>등급</th>
					<th>효과</th>
					<th>플레이버 텍스트</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {startitems.map((startitem, index) =>
                    <tr key={index}>
						<td>{startitem.heroname}</td>
                        <td>{startitem.itemname}</td>
                        <td>{startitem.class}</td>
						<td>{startitem.effect}</td>
						<td>{startitem.flavor_text}</td>
						<td><img src = {`./image/${startitem.image}`} alt = 'NULL'/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const Card = () => {
	const [cards, setCard] = useState<any[]>([])
	
	const fetchCard = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/card')
	        console.log(res)
			setCard(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchCard()
	}, [])
    
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>id</th>
                    <th>이름</th>
                    <th>코스트</th>
					<th>강화</th>
					<th>등급</th>
					<th>사용케릭터</th>
					<th>타입</th>
					<th>효과</th>
					<th>comment</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {cards.map((card, index) =>
                    <tr key={index}>
                        <td>{card.id}</td>
                        <td>{card.name}</td>
                        <td>{card.cost}</td>
                        <td>{card.reinforcement}</td>
                        <td>{card.class}</td>
                        <td>{card.dedicated}</td>
						<td>{card.type}</td>
						<td>{card.effect}</td>
						<td>{card.comments}</td>
						<td><img src = {`./image/${card.image}`} alt='NULL'/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const Item = () => {
	const [items, setItem] = useState<any[]>([])
	
	const fetchItem = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/item')
	        console.log(res)
			setItem(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchItem()
	}, [])
    
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>id</th>
                    <th>이름</th>
					<th>등급</th>
					<th>사용케릭터</th>
					<th>효과</th>
					<th>플레이버 텍스트</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.class}</td>
                        <td>{item.dedicated}</td>
						<td>{item.effect}</td>
						<td>{item.flavor_text}</td>
						<td><img src = {`./image/${item.image}`} alt ='NULL'/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const Potion = () => {
	const [potions, setPotion] = useState<any[]>([])
	
	const fetchPotion = async() => {
		try {
			const res = await axios.get('https://final2021.run.goorm.io/potion')
	        console.log(res)
			setPotion(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchPotion()
	}, [])
    
    return (
        <table>
            <thead>
                <tr key='0'>
                    <th>id</th>
                    <th>이름</th>
					<th>등급</th>
					<th>사용케릭터</th>
					<th>효과</th>
					<th>이미지</th>
                </tr>
            </thead>
            <tbody>
                {potions.map((potion, index) =>
                    <tr key={index}>
                        <td>{potion.id}</td>
                        <td>{potion.name}</td>
                        <td>{potion.class}</td>
                        <td>{potion.dedicated}</td>
						<td>{potion.effect}</td>
						<td><img src = {`./image/${potion.image}`} alt ='NULL'/></td>
                    </tr>
                )}
			</tbody>
        </table>
    )
}