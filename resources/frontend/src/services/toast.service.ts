import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(title: string, msg: string): void {
    this.messageService.add({ severity: 'success', summary: title, detail: msg });
  }

  showError(title: string, msg: string): void {
    this.messageService.add({ severity: 'error', summary: title, detail: msg });
  }

  showInfo(title: string, msg: string): void {
    this.messageService.add({ severity: 'info', summary: title, detail: msg });
  }

  showWarning(title: string, msg: string): void {
    this.messageService.add({ severity: 'warn', summary: title, detail: msg });
  }

  showContrast(title: string, msg: string) {
    this.messageService.add({ severity: 'contrast', summary: title, detail: msg });
  }

  showSecondary(title: string, msg: string) {
    this.messageService.add({ severity: 'secondary', summary: title, detail: msg });
  }

  // Método para limpar as mensagens
  clear(): void {
    this.messageService.clear();
  }
}
