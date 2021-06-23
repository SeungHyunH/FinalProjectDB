import express, { Request, Response } from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(cors())

const dbc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql1234',
	database: 'SlaytheSpireDatabase'
})

dbc.connect()

app.listen('3001', () => {
	console.log('Server Started')
})

app.get('/hero', (req: Request, res: Response) => {
	const query: string = 'select * from hero'
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err)
		res.send(rows)
	})
})

app.get('/start_card', (req: Request, res: Response) => {
	const query: string = 'select hero.name as heroname, card.name as cardname, card.cost, card.reinforcement, card.class, card.type, card.effect, card.comments, card.image from hero join start_card on hero.id = start_card.hero_id join card on start_card.card_id = card.id'
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err)
		res.send(rows)
	})
})

app.get('/start_item', (req: Request, res: Response) => {
	const query: string = 'select hero.name as heroname, item.name as itemname, item.class , item.effect, item.flavor_text , item.image from hero join start_item on hero.id = start_item.hero_id join item on start_item.item_id = item.id'
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err)
		res.send(rows)
	})
})

app.get('/card', (req: Request, res: Response) => {
	const query: string = 'select * from card'
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err)
		res.send(rows)
	})
})

app.get('/item', (req: Request, res: Response) => {
	const query: string = 'select * from item'
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err)
		res.send(rows)
	})
})