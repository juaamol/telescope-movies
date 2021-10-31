import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Sanitizes the given url
   *
   * @param url url to sanitize
   * @returns a sanitized url
   */
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.sanitizer.sanitize(SecurityContext.URL, url)!
    );
  }
}
