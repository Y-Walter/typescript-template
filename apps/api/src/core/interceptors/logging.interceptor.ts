import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("start...");

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`finish... ${Date.now() - now}ms`)));
  }
}
