"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, Play } from "lucide-react"

const moods = [
  {
    id: "happy",
    label: "Happy",
    emoji: "😊",
    color: "from-yellow-200 to-orange-200",
    darkColor: "from-yellow-800 to-orange-800",
  },
  {
    id: "sad",
    label: "Sad",
    emoji: "😢",
    color: "from-blue-200 to-indigo-200",
    darkColor: "from-blue-800 to-indigo-800",
  },
  {
    id: "energetic",
    label: "Energetic",
    emoji: "⚡",
    color: "from-red-200 to-pink-200",
    darkColor: "from-red-800 to-pink-800",
  },
  {
    id: "chill",
    label: "Chill",
    emoji: "😌",
    color: "from-green-200 to-teal-200",
    darkColor: "from-green-800 to-teal-800",
  },
  {
    id: "romantic",
    label: "Romantic",
    emoji: "💕",
    color: "from-pink-200 to-rose-200",
    darkColor: "from-pink-800 to-rose-800",
  },
  {
    id: "angry",
    label: "Angry",
    emoji: "😤",
    color: "from-orange-200 to-red-200",
    darkColor: "from-orange-800 to-red-800",
  },
]

const playlists = {
  happy: {
    title: "Sunshine Vibes",
    description: "Uplifting tracks to brighten your day",
    songs: [
      { title: "Good as Hell", artist: "Lizzo" },
      { title: "Happy", artist: "Pharrell Williams" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
      { title: "Walking on Sunshine", artist: "Katrina and the Waves" },
    ],
  },
  sad: {
    title: "Melancholy Moments",
    description: "Gentle songs for reflection",
    songs: [
      { title: "Someone Like You", artist: "Adele" },
      { title: "Mad World", artist: "Gary Jules" },
      { title: "Hurt", artist: "Johnny Cash" },
      { title: "Black", artist: "Pearl Jam" },
    ],
  },
  energetic: {
    title: "Power Surge",
    description: "High-energy beats to fuel your day",
    songs: [
      { title: "Thunder", artist: "Imagine Dragons" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
      { title: "Eye of the Tiger", artist: "Survivor" },
      { title: "Stronger", artist: "Kanye West" },
    ],
  },
  chill: {
    title: "Peaceful Waves",
    description: "Relaxing tunes for unwinding",
    songs: [
      { title: "Weightless", artist: "Marconi Union" },
      { title: "River", artist: "Leon Bridges" },
      { title: "Holocene", artist: "Bon Iver" },
      { title: "Breathe Me", artist: "Sia" },
    ],
  },
  romantic: {
    title: "Love Letters",
    description: "Romantic melodies for the heart",
    songs: [
      { title: "Perfect", artist: "Ed Sheeran" },
      { title: "All of Me", artist: "John Legend" },
      { title: "Thinking Out Loud", artist: "Ed Sheeran" },
      { title: "Make You Feel My Love", artist: "Adele" },
    ],
  },
  angry: {
    title: "Rage Release",
    description: "Intense tracks to channel your energy",
    songs: [
      { title: "Break Stuff", artist: "Limp Bizkit" },
      { title: "Bodies", artist: "Drowning Pool" },
      { title: "Killing in the Name", artist: "Rage Against the Machine" },
      { title: "Chop Suey!", artist: "System of a Down" },
    ],
  },
}

export default function MoodTune() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  const selectedMoodData = selectedMood ? moods.find((m) => m.id === selectedMood) : null
  const playlist = selectedMood ? playlists[selectedMood as keyof typeof playlists] : null

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen transition-all duration-700 ${
          selectedMoodData
            ? `bg-gradient-to-br ${darkMode ? selectedMoodData.darkColor : selectedMoodData.color}`
            : darkMode
              ? "bg-gradient-to-br from-gray-900 to-gray-800"
              : "bg-gradient-to-br from-purple-100 to-pink-100"
        }`}
      >
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-end p-6">
          <Button
            onClick={() => setDarkMode(!darkMode)}
            variant="ghost"
            size="icon"
            className={`rounded-full transition-all duration-300 ${
              darkMode
                ? "bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400"
                : "bg-white/50 hover:bg-white/70 text-gray-700"
            } backdrop-blur-sm shadow-lg`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="container mx-auto px-6 pb-12">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              MoodTune
            </h1>
            <p
              className={`text-xl md:text-2xl transition-colors duration-300 ${
                darkMode ? "text-gray-200" : "text-gray-600"
              }`}
            >
              How are you feeling today?
            </p>
          </div>

          {/* Mood Selection Grid */}
          {!selectedMood && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {moods.map((mood) => (
                <Button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`h-24 md:h-32 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/60 text-white border border-gray-600/50"
                      : "bg-white/60 hover:bg-white/80 text-gray-800 border border-white/50"
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                  variant="ghost"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-3xl md:text-4xl">{mood.emoji}</span>
                    <span className="font-bold text-sm md:text-base">{mood.label}</span>
                  </div>
                </Button>
              ))}
            </div>
          )}

          {/* Playlist Display */}
          {selectedMood && playlist && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Button
                  onClick={() => setSelectedMood(null)}
                  variant="ghost"
                  className={`mb-6 transition-all duration-300 ${
                    darkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-black/10"
                  }`}
                >
                  ← Choose a different mood
                </Button>
                <div className="animate-in slide-in-from-bottom-4 duration-700">
                  <div className="text-6xl mb-4">{selectedMoodData?.emoji}</div>
                  <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {selectedMoodData?.label} Playlist
                  </h2>
                </div>
              </div>

              <Card
                className={`transition-all duration-500 animate-in slide-in-from-bottom-8 ${
                  darkMode ? "bg-gray-900/60 border-gray-700/50" : "bg-white/60 border-white/50"
                } backdrop-blur-md shadow-2xl`}
              >
                <CardContent className="p-8">
                  {/* Playlist Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-32 h-32 mx-auto mb-4 rounded-2xl ${
                        darkMode ? selectedMoodData?.darkColor : selectedMoodData?.color
                      } bg-gradient-to-br flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-4xl">{selectedMoodData?.emoji}</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {playlist.title}
                    </h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{playlist.description}</p>
                  </div>

                  {/* Song List */}
                  <div className="space-y-4">
                    {playlist.songs.map((song, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                          darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/50 hover:bg-white/70"
                        } backdrop-blur-sm`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Button
                          size="icon"
                          className={`rounded-full transition-all duration-300 ${
                            darkMode
                              ? "bg-white/20 hover:bg-white/30 text-white"
                              : "bg-gray-800/20 hover:bg-gray-800/30 text-gray-800"
                          }`}
                          variant="ghost"
                        >
                          <Play className="h-4 w-4 fill-current" />
                        </Button>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>{song.title}</h4>
                          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{song.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
