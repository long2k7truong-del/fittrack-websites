// Đường dẫn API chính xác theo dự án mới nhất của bạn
const API_URL = "https://6a3a7bba917c7b14c74d967e.mockapi.io/workouts";

// 1. Hàm lấy danh sách (GET)
async function getWorkouts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error("Không thể tải dữ liệu");
        return await response.json();
    } catch (error) {
        console.error("Lỗi:", error);
        throw error;
    }
}

// 2. Hàm thêm mới (POST)
async function createWorkout(workoutData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workoutData)
    });
    if (!response.ok) throw new Error("Không thể thêm mới");
    return await response.json();
}

// 3. Hàm xóa (DELETE)
async function deleteWorkout(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("Không thể xóa");
    return await response.json();
}

// 4. Hàm cập nhật (PUT)
async function updateWorkout(id, updatedData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error("Không thể cập nhật");
    return await response.json();
}