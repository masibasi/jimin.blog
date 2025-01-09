import os

def print_directory_contents(path, indent=0, exclude_dirs=None):
    if exclude_dirs is None:
        exclude_dirs = {"node_modules", ".vercel", ".git", "__pycache__"}
    try:
        with os.scandir(path) as entries:
            for entry in entries:
                # 특정 디렉토리 제외
                if entry.name in exclude_dirs and entry.is_dir():
                    continue
                
                # 들여쓰기로 구조를 표시
                print("  " * indent + f"- {entry.name}")
                
                # 디렉토리일 경우 재귀 호출
                if entry.is_dir():
                    print_directory_contents(entry.path, indent + 1, exclude_dirs)
    except PermissionError:
        print("  " * indent + "- [Permission Denied]")

# 사용 예시
directory_path = "./"
print(f"Directory structure for {directory_path}:")
print_directory_contents(directory_path)
