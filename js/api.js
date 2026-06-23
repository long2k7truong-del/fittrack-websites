// Cấu hình đường dẫn API chuẩn
const API_URL = "https://6a3a7bba917c7b14c74d967f.mockapi.io/workouts";

// 1. Hàm lấy danh sách tất cả các buổi tập (GET)
// Sử dụng mode: 'cors' để tránh lỗi chặn kết nối từ trình duyệt
async function getWorkouts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) throw new Error("Không thể tải dữ liệu");
        return await response.json();
    } catch (error) {
        console.error("Lỗi:", error);
        throw error;
    }
}

// 2. Hàm thêm mới một buổi tập (POST)
async function createWorkout(workoutData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workoutData)
    });
    if (!response.ok) throw new Error("Không thể thêm mới");
    return await response.json();
}

// 3. Hàm xóa một buổi tập (DELETE)
async function deleteWorkout(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("Không thể xóa");
    return await response.json();
}

// 4. Hàm cập nhật dữ liệu (PUT)
async function updateWorkout(id, updatedData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error("Không thể cập nhật");
    return await response.json();
}

// Gợi ý: Gọi hàm này để hiển thị dữ liệu ra màn hình
// getWorkouts().then(data => console.log(data)).catch(err => alert(err.message));