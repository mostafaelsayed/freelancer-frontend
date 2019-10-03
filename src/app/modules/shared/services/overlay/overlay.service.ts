import { Injectable, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayLoaderComponent } from '../../components/overlay-loader/overlay-loader.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(public overlay: Overlay) { }

  public overlayRef;

  public viewContainerRef: ViewContainerRef;

  public createOverlayRef() {
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    config.hasBackdrop = true;
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });
  }

  public addOverlayComponent(): void {
    this.createOverlayRef();
    this.overlayRef.attach(new ComponentPortal(OverlayLoaderComponent, this.viewContainerRef));
  }

  public removeOverlayComponent(): void {
    this.overlayRef.detach();
  }
}
