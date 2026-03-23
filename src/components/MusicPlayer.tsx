import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer({ src, startTime = 21, autoPlay = true }: { src: string; startTime?: number; autoPlay?: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      if (autoPlay) {
        audio.currentTime = startTime;
        audio.play().catch(() => {
          // Autoplay might be blocked by browser
          setIsPlaying(false);
        });
      }
    };

    audio.addEventListener('canplay', handleCanPlay);
    return () => audio.removeEventListener('canplay', handleCanPlay);
  }, [autoPlay, startTime]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (audioRef.current.currentTime === 0) {
          audioRef.current.currentTime = startTime;
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border border-rose-100">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <button
        onClick={handlePlayPause}
        className="p-2 hover:bg-rose-100 rounded-full transition-colors flex-shrink-0"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause size={20} className="text-rose-600" />
        ) : (
          <Play size={20} className="text-rose-600" />
        )}
      </button>

      <button
        onClick={handleMute}
        className="p-2 hover:bg-rose-100 rounded-full transition-colors flex-shrink-0"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX size={18} className="text-rose-500" />
        ) : (
          <Volume2 size={18} className="text-rose-500" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div
          className="h-1.5 bg-rose-200 rounded-full cursor-pointer group relative"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
      </div>

      <span className="text-xs text-rose-600 whitespace-nowrap flex-shrink-0">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
}
