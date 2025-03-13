import { MagicUIComponent, ComponentDatabase, ButtonComponent } from "./types";
import ShimmerButtonData from "./components/shimmer-button.json";
import AnimatedBeamData from "./components/animated-beam.json";
import AnimatedCircularProgressBarData from "./components/animated-circular-progress-bar.json";
import AnimatedGradientTextData from "./components/animated-gradient-text.json";
import AnimatedGridPatternData from "./components/animated-grid-pattern.json";
import AnimatedListData from "./components/animated-list.json";
import AnimatedShinyTextData from "./components/animated-shiny-text.json";
import AnimatedSubscribeButtonData from "./components/animated-subscribe-button.json";
import AndroidData from "./components/android.json";
import AuroraTextData from "./components/aurora-text.json";
import AvatarCirclesData from "./components/avatar-circles.json";
import BentoGridData from "./components/bento-grid.json";
import BlurFadeData from "./components/blur-fade.json";
import BorderBeamData from "./components/border-beam.json";
import BoxRevealData from "./components/box-reveal.json";
import CodeComparisonData from "./components/code-comparison.json";
import ConfettiData from "./components/confetti.json";
import CoolModeData from "./components/cool-mode.json";
import DockData from "./components/dock.json";
import DotPatternData from "./components/dot-pattern.json";
import FileTreeData from "./components/file-tree.json";
import FlickeringGridData from "./components/flickering-grid.json";
import FlipTextData from "./components/flip-text.json";
import GlobeData from "./components/globe.json";
import GridPatternData from "./components/grid-pattern.json";
import HeroVideoDialogData from "./components/hero-video-dialog.json";
import HyperTextData from "./components/hyper-text.json";
import IconCloudData from "./components/icon-cloud.json";
import InteractiveGridPatternData from "./components/interactive-grid-pattern.json";
import InteractiveHoverButtonData from "./components/interactive-hover-button.json";
import Iphone15ProData from "./components/iphone-15-pro.json";
import LensData from "./components/lens.json";
import LineShadowTextData from "./components/line-shadow-text.json";
import MagicCardData from "./components/magic-card.json";
import MarqueeData from "./components/marquee.json";
import MeteorsData from "./components/meteors.json";
import MorphingTextData from "./components/morphing-text.json";
import NeonGradientCardData from "./components/neon-gradient-card.json";
import NumberTickerData from "./components/number-ticker.json";
import OrbitingCirclesData from "./components/orbiting-circles.json";
import ParticlesData from "./components/particles.json";
import PointerData from "./components/pointer.json";
import PulsatingButtonData from "./components/pulsating-button.json";
import RainbowButtonData from "./components/rainbow-button.json";
import RetroGridData from "./components/retro-grid.json";
import RippleButtonData from "./components/ripple-button.json";
import RippleData from "./components/ripple.json";
import SafariData from "./components/safari.json";
import ScratchToRevealData from "./components/scratch-to-reveal.json";
import ScriptCopyBtnData from "./components/script-copy-btn.json";
import ScrollBasedVelocityData from "./components/scroll-based-velocity.json";
import ScrollProgressData from "./components/scroll-progress.json";
import ShineBorderData from "./components/shine-border.json";
import ShinyButtonData from "./components/shiny-button.json";
import SparklesTextData from "./components/sparkles-text.json";
import SpinningTextData from "./components/spinning-text.json";
import TerminalData from "./components/terminal.json";
import TextAnimateData from "./components/text-animate.json";
import TextRevealData from "./components/text-reveal.json";
import TweetCardData from "./components/tweet-card.json";
import TypingAnimationData from "./components/typing-animation.json";
import WarpBackgroundData from "./components/warp-background.json";
import WordRotateData from "./components/word-rotate.json";

/**
 * Database of Magic UI components
 */
class MagicUIComponentDatabase implements ComponentDatabase {
  components: MagicUIComponent[] = [];

  constructor() {
    this.initializeComponents();
  }

  /**
   * Initialize the database with Magic UI components
   */
  private initializeComponents(): void {
    // Add all components from JSON files
    this.components.push(ShimmerButtonData as ButtonComponent);
    this.components.push(AnimatedBeamData as MagicUIComponent);
    this.components.push(AnimatedCircularProgressBarData as MagicUIComponent);
    this.components.push(AnimatedGradientTextData as MagicUIComponent);
    this.components.push(AnimatedGridPatternData as MagicUIComponent);
    this.components.push(AnimatedListData as MagicUIComponent);
    this.components.push(AnimatedShinyTextData as MagicUIComponent);
    this.components.push(AnimatedSubscribeButtonData as MagicUIComponent);
    this.components.push(AndroidData as MagicUIComponent);
    this.components.push(AuroraTextData as MagicUIComponent);
    this.components.push(AvatarCirclesData as MagicUIComponent);
    this.components.push(BentoGridData as MagicUIComponent);
    this.components.push(BlurFadeData as MagicUIComponent);
    this.components.push(BorderBeamData as MagicUIComponent);
    this.components.push(BoxRevealData as MagicUIComponent);
    this.components.push(CodeComparisonData as MagicUIComponent);
    this.components.push(ConfettiData as MagicUIComponent);
    this.components.push(CoolModeData as MagicUIComponent);
    this.components.push(DockData as MagicUIComponent);
    this.components.push(DotPatternData as MagicUIComponent);
    this.components.push(FileTreeData as MagicUIComponent);
    this.components.push(FlickeringGridData as MagicUIComponent);
    this.components.push(FlipTextData as MagicUIComponent);
    this.components.push(GlobeData as MagicUIComponent);
    this.components.push(GridPatternData as MagicUIComponent);
    this.components.push(HeroVideoDialogData as MagicUIComponent);
    this.components.push(HyperTextData as MagicUIComponent);
    this.components.push(IconCloudData as MagicUIComponent);
    this.components.push(InteractiveGridPatternData as MagicUIComponent);
    this.components.push(InteractiveHoverButtonData as MagicUIComponent);
    this.components.push(Iphone15ProData as MagicUIComponent);
    this.components.push(LensData as MagicUIComponent);
    this.components.push(LineShadowTextData as MagicUIComponent);
    this.components.push(MagicCardData as MagicUIComponent);
    this.components.push(MarqueeData as MagicUIComponent);
    this.components.push(MeteorsData as MagicUIComponent);
    this.components.push(MorphingTextData as MagicUIComponent);
    this.components.push(NeonGradientCardData as MagicUIComponent);
    this.components.push(NumberTickerData as MagicUIComponent);
    this.components.push(OrbitingCirclesData as MagicUIComponent);
    this.components.push(ParticlesData as MagicUIComponent);
    this.components.push(PointerData as MagicUIComponent);
    this.components.push(PulsatingButtonData as MagicUIComponent);
    this.components.push(RainbowButtonData as MagicUIComponent);
    this.components.push(RetroGridData as MagicUIComponent);
    this.components.push(RippleButtonData as MagicUIComponent);
    this.components.push(RippleData as MagicUIComponent);
    this.components.push(SafariData as MagicUIComponent);
    this.components.push(ScratchToRevealData as MagicUIComponent);
    this.components.push(ScriptCopyBtnData as MagicUIComponent);
    this.components.push(ScrollBasedVelocityData as MagicUIComponent);
    this.components.push(ScrollProgressData as MagicUIComponent);
    this.components.push(ShineBorderData as MagicUIComponent);
    this.components.push(ShinyButtonData as MagicUIComponent);
    this.components.push(SparklesTextData as MagicUIComponent);
    this.components.push(SpinningTextData as MagicUIComponent);
    this.components.push(TerminalData as MagicUIComponent);
    this.components.push(TextAnimateData as MagicUIComponent);
    this.components.push(TextRevealData as MagicUIComponent);
    this.components.push(TweetCardData as MagicUIComponent);
    this.components.push(TypingAnimationData as MagicUIComponent);
    this.components.push(WarpBackgroundData as MagicUIComponent);
    this.components.push(WordRotateData as MagicUIComponent);
  }

  /**
   * Get a component by its name
   * @param name The name of the component
   * @returns The component or undefined if not found
   */
  getComponentByName(name: string): MagicUIComponent | undefined {
    return this.components.find(
      (component) => component.name.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * Get components by their type
   * @param type The type of components to retrieve
   * @returns An array of components of the specified type
   */
  getComponentsByType(type: string): MagicUIComponent[] {
    return this.components.filter(
      (component) =>
        (component as any).type?.toLowerCase() === type.toLowerCase()
    );
  }

  /**
   * Get all components in the database
   * @returns All components
   */
  getAllComponents(): MagicUIComponent[] {
    return [...this.components];
  }
}

// Export a singleton instance
export const componentDatabase = new MagicUIComponentDatabase();
