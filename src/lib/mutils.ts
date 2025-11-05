import { AxiosError } from "axios";
import { toast } from "sonner";

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response?.data) {
      const responseData = error.response.data;
      if (typeof responseData === "string") {
        return responseData;
      }
      if (typeof responseData === "object") {
        // 尝试从常见字段中获取错误消息
        if (responseData.message) {
          return String(responseData.message);
        }
        if (responseData.error) {
          return String(responseData.error);
        }
        if (responseData.msg) {
          return String(responseData.msg);
        }
        if (responseData.error_description) {
          return String(responseData.error_description);
        }
      }
    }
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }
  return String(error);
}

export function toastOnError(e: unknown) {
  toast.error(getErrorMessage(e));
}
