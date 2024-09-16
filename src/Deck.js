import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawnCard, setDrawnCard] = useState(null);

    useEffect(() => {
        async function createDeck() {
            if (!deck) {
                const userResult = await axios.get('https://deckofcardsapi.com/api/deck/new/');
                setDeck(userResult.data);
            }
        }
        createDeck();
    }, [deck]);

    async function drawCard() {
        if (!deck) return;
        else if(deck.remaining==0) alert("Error: no cards remaining!")
        const userDraw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
        setDeck(userDraw.data)
        setDrawnCard(userDraw.data.cards[0]);
    }

    async function shuffle() {
        const userDraw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle`);
        setDeck(userDraw.data)
        setDrawnCard(null)
    }

    return (
        <div>
            <button onClick={drawCard}>Draw card</button>
            <button onClick={shuffle}>Shuffle deck</button>
            {drawnCard && (
                <Card suit={drawnCard.suit} value={drawnCard.value} />
            )}
        </div>
    );
}

export default Deck;