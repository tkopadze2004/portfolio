import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TMode } from './core/types/theme-mode.type';


@Injectable({ providedIn: 'root' })
export class ThemeService {
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  private currentMode$ = new BehaviorSubject<TMode>('dark');

  constructor() {
    this.updateRootClass('light', 'dark');
  }

  private updateRootClass(oldMode: TMode | '', newMode: TMode) {
    this.renderer.removeClass(document.body, oldMode);
    this.renderer.addClass(document.body, newMode);
  }

  public setMode(mode: TMode): void {
    this.updateRootClass(this.currentMode$.value, mode);
    this.currentMode$.next(mode);
  }

  public getMode(): Observable<TMode> {
    return this.currentMode$.asObservable();
  }

  public getModeValue(): TMode {
    return this.currentMode$.value;
  }
}
