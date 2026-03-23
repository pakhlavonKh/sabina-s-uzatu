import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicToggle({ src, startTime = 22, autoPlay = true }: { src: string; startTime?: number; autoPlay?: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayAttempted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !autoPlay) return;

    const tryPlay = () => {
      if (autoplayAttempted.current) return;
      autoplayAttempted.current = true;
      
      audio.currentTime = Math.max(0, startTime);
      audio.muted = false;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If unmuted autoplay fails, try muted
          audio.muted = true;
          audio.play().catch(() => {
            console.log('All autoplay attempts failed');
          });
        });
      }
    };

    // Try on user interaction
    const handleUserInteraction = () => {
      tryPlay();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Try immediately
    tryPlay();

    // Also try after page is visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
    };

    // Listen for user interaction as fallback
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [src, autoPlay, startTime]);

  const handleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      if (!newMutedState) {
        audioRef.current.currentTime = Math.max(0, startTime);
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={src} 
        preload="metadata"
      />
      <button
        onClick={handleMute}
        className="fixed bottom-8 right-8 z-50 p-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX size={24} />
        ) : (
          <Volume2 size={24} />
        )}
      </button>
    </>
  );
}
