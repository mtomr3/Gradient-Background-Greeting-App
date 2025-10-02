import { useState } from "react"
import { Button } from "@/components/ui/button"

const greetings = [
  "Hello!",
  "Hi there!",
  "Greetings!",
  "Welcome!",
  "Hey!",
  "Good day!",
  "Howdy!",
  "Salutations!",
  "What's up!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Namaste!",
  "Konnichiwa!",
]

const howAreYous = [
  "How are you?",
  "How are you doing?",
  "How's it going?",
  "How have you been?",
  "How are things?",
  "How are you today?",
  "How do you do?",
  "How's everything?",
  "How's life?",
  "How are you feeling?",
  "What's new?",
  "How's your day?",
  "You doing okay?",
  "Everything alright?",
]

const Index = () => {
  const [greeting, setGreeting] = useState("Click me!")
  const [howAreYou, setHowAreYou] = useState("Click me too!")

  const handleClick = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting)
  }

  const handleHowAreYouClick = () => {
    const randomHowAreYou = howAreYous[Math.floor(Math.random() * howAreYous.length)]
    setHowAreYou(randomHowAreYou)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <div className="flex flex-col gap-6">
        <Button
          onClick={handleClick}
          size="lg"
          className="text-2xl px-8 py-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          {greeting}
        </Button>
        <Button
          onClick={handleHowAreYouClick}
          size="lg"
          className="text-2xl px-8 py-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          {howAreYou}
        </Button>
      </div>
    </div>
  )
}

export default Index